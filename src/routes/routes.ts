import { Application } from "express";

export namespace generalRouter{
    module.exports = async(app:Application)=>{
        require('./articleRouter')(app)

    }
}