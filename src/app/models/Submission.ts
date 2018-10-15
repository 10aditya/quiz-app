export class Submission {
    qid: number;
    sid: number;
    score: number;
    answers: string;
    tid:number;
    constructor(qid: number, sid: number, tid:number, score: number, answers: string) {
        this.qid = qid;
        this.sid = sid;
        this.tid = tid
        this.score = score;
        this.answers = answers;
    }
}