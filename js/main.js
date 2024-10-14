var btn = document.querySelector("#my-btn")
var quoteCard = document.querySelector(".card")

var qoutsList = [
    {post:`"Be yourself; everyone else is already taken."`, author:"― Oscar Wilde"},
    {post:`“So many books, so little time.”`,author:"― Frank Zappa"},
    {post:`“Two things are infinite: the universe and human stupidity”`,author:"― Albert Einstein"},
    {post:`“You only live once, but if you do it right, once is enough.”`, author:"― Mae West"},
    {post:`“Be the change that you wish to see in the world.”`, author:"― Mahatma Gandhi"},
    {post:`“In three words I can sum up everything I've learned about life: it goes on.”`, author:"― Robert Frost"},
    {post:`“If you tell the truth, you don't have to remember anything.”`, author:"― Mark Twain"},
    {post:`“A friend is someone who knows all about you and still loves you.”`, author:"― Elbert Hubbard"},
    {post:`“It is better to be hated for what you are than to be loved for what you are not.”`, author:"― Andre Gide"},
    {post:`“So many books, so little time.”`, author:"― Isabel Allende"},
    {post:`“People try to explain things they don’t understand by comparing them to what they know.”`, author:"― Paul J. Bennett"},
    {post:`“The library is inhabited by spirits that come out of the pages at night.”`, author:"― Isabel Allende"},
    {post:`“Nothing ever becomes real 'til it is experienced.”`, author:"― John Keats"},
    {post:`“The knowledge of anything, since all things have causes, is not acquired or complete unless it is known by its causes.”`, author:"― Avicenna"},
    {post:`“And a naïve part of me thinks that since we have made it this far, we will make it forever. If we existed for even a second, we could exist eternally.”`, author:"― Chloe Michelle Howarth"},
    {post:`“Nothing is more continuously wonderful than the things that happen every day to the man with imagination sufficiently awake to realize their wonder.”`, author:"― Neville Goddard"},
    {post:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`, author:"― Marilyn Monroe"},
    {post:`“A room without books is like a body without a soul.”`, author:"― Marcus Tullius Cicero"},
    {post:`"Be yourself; everyone else is already taken."`, author:"― Oscar Wilde"},
    {post:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`, author:"― Bernard M. Baruch"},
   
]


var uniqArray = []

function makeQotes(){
    var randNumber = Math.trunc(Math.random() * 20)
if (uniqArray[uniqArray.length -1]!== randNumber) {
    displayQuote(randNumber)
    uniqArray.push(randNumber)

}else{
    return false;
}   

if (uniqArray.length > 2) {
    uniqArray.splice(0,1)
}
     
}






function displayQuote(index){

    var quoteHtml = ` <div class="box">
                <p class="new-quote">${qoutsList[index].post}</p>
                 <h2>${qoutsList[index].author}</h2>
            </div>`
            quoteCard.innerHTML  = quoteHtml;
          

}


