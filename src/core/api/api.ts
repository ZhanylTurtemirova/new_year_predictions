import Request from './request'

export class Api {
    static getWishes() {
        return Request.get("wishes")
    }
    static sendMail(data: any) {
        return Request.post("mail", data)
    }
 }