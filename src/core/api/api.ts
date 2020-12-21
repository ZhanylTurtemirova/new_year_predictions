import Request from './request'

export class Api {
    static getWishes() {
        return Request.get("wishes")
    }
    static sendMail(data: any) {
        return Request.post("mail", data)
    }
    static setUser(data: any) {
        return Request.post("users", data)
    }
    static changeWish(data: any) {
        return Request.patch(`wishes/${data.id}`, {count: data.count})
    }
 }