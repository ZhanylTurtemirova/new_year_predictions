import Request from './request'

export class Api {
    static getWishes() {
        return Request.get("wishes")
    }
 }