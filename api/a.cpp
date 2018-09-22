#include <bits/stdc++.h>
using namespace std;
#define ll long long

struct Edge 
{ 
    ll src, dest, weight; 
}; 
  
struct Graph 
{ 
    ll V, E; 
    struct Edge* edge; 
}; 
  
struct Graph* createGraph(ll V, ll E) 
{ 
    struct Graph* graph = new Graph; 
    graph->V = V; 
    graph->E = E; 
    graph->edge = new Edge[E]; 
    return graph; 
} 
  
// A utility function used to prll the solution 
void prllArr(ll dist[], ll n) 
{ 
    prllf("Vertex   Distance from Source\n"); 
    for (ll i = 0; i < n; ++i) 
        prllf("%d \t\t %d\n", i, dist[i]); 
} 
 
void BellmanFord(struct Graph* graph, ll src) 
{ 
    ll V = graph->V; 
    ll E = graph->E; 
    ll dist[V]; 
   
    for (ll i = 0; i < V; i++) 
        dist[i]   = INT_MAX; 
    dist[src] = 0; 
  
    for (ll i = 1; i <= V-1; i++) 
    { 
        for (ll j = 0; j < E; j++) 
        { 
            ll u = graph->edge[j].src; 
            ll v = graph->edge[j].dest; 
            ll weight = graph->edge[j].weight; 
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) 
                dist[v] = dist[u] + weight; 
        } 
    } 
  
    prllArr(dist, V); 
  
    return; 
}

int main() {
	ll t,n,m,nc,src,dest,a[101][101],b1[101][101],b2[101][101],x,y,z,q,i,j,k;
	string s;
	map<pair<ll, ll>,ll> e;
    map<pair<ll, ll>,ll>::iterator it; 
	cin>>t;
	while(t--){
		cin>>n;
		nc1=1;
		nc2=1;
        e.clear();
		b1[0][0]=0;
		b2[n-1][n-1]=0;
		for(i=0; i<n; i++){
			for(j=0; j<n; j++){
				cin>>a[i][j];
				if(i<j){
					b1[i][j]=nc1;
					nc1++;
				}
			}
		}
        b1[n-1][n-1]=nc1;
        nc1++;
		for(i=n-1;i>=0;i--){
			for(j=i-1;j>=0;j--){
				b2[i][j]=nc2;
				nc2++;
			}
		}
        b2[0][0]=nc2;
        nc2++;
        ne=1;
        e.insert(mp(mp(0,1),a[0][1]));
		for(i=0;i<n;i++){
            for(j=i+1;j<n;j++){
                if(i+1!=j){
                    ne++;
                    e.insert(mp(mp(b1[i][j],b1[i+1][j]),a[i+1][j]));
                }
                if(j+1<n){
                    ne++;
                    e.insert(mp(mp(b1[i][j],b1[i][j+1]),a[i][j+1]));
                }
            }
        }
        ne++;
        e.insert(mp(mp(b1[n-2][n-1],b1[n-1][n-1]),a[n-1][n-1]));
        struct Graph* graph = createGraph(nc1, ne); 
        
        for(it=e.begin(), i=0; it!=e.end(); i++, it++){
            graph->edge[i].src = it->first->first;
            graph->edge[i].dest = it->first->second;
            graph->edge[i].weight = it->second;
        }

        x=BellmanFord(graph,0)+a[0][0];

        ne=1;
        e.clear();
        e.insert(mp(mp(0,1),a[n-1][n-2]));
		for(i=n-1;i>=0;i--){
            for(j=i-1;j>=0;j--){
                if(i-1!=j){
                    ne++;
                    e.insert(mp(mp(b2[i][j],b2[i-1][j]),a[i-1][j]));
                }
                if(j-1>=0){
                    ne++;
                    e.insert(mp(mp(b2[i][j],b2[i][j-1]),a[i][j-1]));
                }
            }
        }
        ne++;
        e.insert(mp(mp(b2[1][1],b2[0][0]),a[0][0]));
        graph = createGraph(nc2, ne); 
        
        for(it=e.begin(), i=0; it!=e.end(); i++, it++){
            graph->edge[i].src = it->first->first;
            graph->edge[i].dest = it->first->second;
            graph->edge[i].weight = it->second;
        }

        y=BellmanFord(graph,0)+a[n-1][n-1];
        cout<<x+y<<endl;
		
	}
	// your code goes here
	return 0;
}