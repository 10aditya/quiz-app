#include<bits/stdc++.h>
using namespace std;
#define ll long long int
#define speed ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0)
int main()
{
    speed;
    ll t;
    cin>>t;
    while(t--)
    {
       ll n,k;
       cin>>n>>k;
       ll a[n];
       ll i;
       for(i=0;i<n;i++)
        cin>>a[i];
        sort(a,a+n);
        
        ll j,sum=0;
        for(i=n-2;i>0; i--){
            if(a[i]<=k){continue;}
            for(j=i-1; j>=0; j--){
                if(a[i]<=k){break;}
                if(a[j]>k){
                    a[i]=a[i]-(a[j]-k);
                    a[j]=k;
                }
            }
        }
        for(i=n-2;i>=0;i++){
            if(a[i]>k){
                if(a[n-1]>k){
                    a[n-1]=a[n-1]+(a[i]-k);
                
                    break;}
            }
        }
        for(i=0;i<n;i++)sum+=a[i];
        cout<<sum<<endl;
    }

    return 0;
}