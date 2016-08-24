import express from 'express'
import database, { Book , Join } from '../database'
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  Book.all().then( books => res.render( 'index', { books } ))
  //include dynamic rendering for admin/user pages
})

router.get('/:id', (req, res) => {
  Book.one(req.params.id).then( book => res.render('book_details', {book})).catch( err => res.json(err))
})

router.get('/test', (req, res) => {
  console.log('BooksAuthord',  Book.getAuthors());
  Book.getAuthors().then( books => res.json(books)).catch( err => res.json(err))
})

module.exports = router;
