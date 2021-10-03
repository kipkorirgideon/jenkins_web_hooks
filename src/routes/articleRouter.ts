import express, { Application } from "express"
import {ArticleController} from '../controllers/ArticleControllers'
const articlecontroller = new ArticleController()
module.exports = async(app:Application)=>{
    app.get('/', async(req:any, res:any)=>{
    // const articles = await articlecontroller.getAllArticles(req, res)
    const data = {
        title : 'I love using dockers',
        name : 'Kipkorir Gideon'
    }

    // res.json(articles)
    res.render('article',{data})
    })
    app.post('/addArticle', async(req:any, res:any)=>{
        const new_article = await articlecontroller.addArticle(req, res)
        res.json(new_article)

    })
}