const Article = require('../models/ArticleSchema')

export class ArticleController{
    async getAllArticles(req:any, res:any){
        const allArticles = await Article.find({})
        return allArticles

    }
    async addArticle(req:any,res:any){
        try {
            const new_article = await Article({
                title:req.body.title,
                desc:req.body.description
            })
            new_article.save()
            return new_article
            
        } catch (error) {
            console.log(error)
            
        }

    }
}