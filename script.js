// ==========================
// ELEMENT
// ==========================

const loading = document.getElementById("loading");
const welcome = document.getElementById("welcome");
const envelopeSection = document.getElementById("envelopeSection");
const book = document.getElementById("book");

const endingPage = document.getElementById("endingPage");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const restartBtn = document.getElementById("restartBtn");

const chapterTitle = document.getElementById("chapterTitle");
const chapterContent = document.getElementById("chapterContent");
const pageNumber = document.getElementById("pageNumber");
const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


// ==========================
// LOADING
// ==========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.style.opacity="0";

        setTimeout(()=>{

            loading.style.display="none";

        },1000);

    },1800);

});

// ==========================
// OPEN LETTER
// ==========================

startBtn.addEventListener("click",()=>{

    welcome.style.display="none";

    envelopeSection.style.display="flex";

    setTimeout(()=>{

        continueBtn.style.display="block";

    },1000);

});

// ==========================
// CONTINUE
// ==========================

continueBtn.addEventListener("click",()=>{

    envelopeSection.style.display="none";

    book.style.display="flex";

    showChapter();

});

// ==========================
// CHAPTER DATA
// ==========================

const chapters = [

{
title:"Chapter One\nThe Day You Found Me",

content:`When we first talked, you were the one who sent the first message.

I was never the type of person who liked to contact someone first. If someone reached out to me, I usually just replied normally.

Until now, I still wonder

How did you find me?

Why did you decide to send me a message and start talking to me?

Because at that time, I wasn't looking for love anymore.

I had already decided that I didn't want to fall in love or get involved in a relationship again.

But somehow

I still replied to your message.

From the beginning, I only saw you as a friend.

A few hours and days later, you asked for my photo, and then you showed me yours too.

After that, you suddenly asked for my WhatsApp number.

That was the first time I wondered...

Maybe you started becoming interested in me.

Since we started talking on WhatsApp, you began sending me messages more often and replying to my stories.

For me, that was where everything started.

Then you told me that you liked me, even though we had not known each other for long.

At that time, I barely even talked to you.

And I started wondering...

How could someone develop feelings so quickly?

When I asked you why, you said it was because I was unique, because of who I was, and because you felt comfortable and safe with me.

But I still wondered...

Can comfort at the beginning sometimes become a trap?

Shouldn't someone get to know another person more deeply before calling it love?

That was why I rejected you at first and ignored some of your messages.

Not because I hated you.

I was just afraid of falling in love again.

I knew how painful it could become.

At that time, I had only recently recovered from something that affected me deeply, and I didn't want to go through the same thing again.

But day by day, you kept trying to get closer to me.

And slowly, I started to see your effort.

I still remember when you asked me to give you a chance.

You said it felt like you were begging for love from someone who didn't even love you yet.

And somehow

I finally gave you that chance.

Actually, it happened because of a misunderstanding.

I had not truly said yes yet, but you already thought I had accepted you.

In the end, because I didn't want to hurt your feelings, I chose to accept this relationship.

After that, you started saying many romantic things.

But honestly...

At that time, I only saw them as sweet words from someone who was good at expressing feelings.

I wasn't fully able to believe them yet.

You continued sending me messages every day.

Maybe that was where my feelings slowly started to grow.

Honestly, I didn't even know how to love someone properly at that time.

I was still trying to understand myself.

You often said that I didn't love you, that I was cold.

But it wasn't because I had no feelings.

I just didn't know how to show my love the way you needed.

Because being with you was my first relationship after I had chosen to close my heart for a long time.`
},

{
title:"Chapter Two\nThe Differences We Faced",

content:`A few days after we officially became a couple, we started facing differences that had actually existed from the beginning.

I still remember a conversation that made you upset.

At that time, I often talked about marriage because for me, a relationship should have a purpose and direction.

But you told me that hearing about it every day started to feel overwhelming.

That was when I realized that we looked at some things differently.

You felt that our differences were too big, like the sky and the earth.

And you decided to end our relationship.

The painful part was...

You chose to leave when I was finally starting to become interested in you and slowly falling in love.

I never wanted to force you to stay.

I accepted your decision, even though it hurt.

I still remember when you said it was the best decision and that you would stop contacting me because everything only felt like a waste of time.

But strangely

After some days and weeks, you were the one who came back.

You started asking about how I was doing, you wanted to know about my life, and slowly you became present again.

That was when I felt confused.

Because before, you were the one who said everything was over.

You were the one who said you wouldn't contact me again.

But in the end, you were also the one who opened that door again.

You told me that you couldn't forget me.

You wanted to make sure I was okay.

And because my feelings for you had already started to grow.

I accepted you back.

After we were together again, I started seeing some changes in you.

We spent time together again and slowly became closer than before.

At that moment, I started understanding what you meant when you said you felt like you were begging for love from me.

I realized that sometimes I looked cold and not very romantic.

So I started trying to learn how to show my feelings better.

I tried to become someone who could express love more openly.

And I still remember when you said it was okay.

You knew I was still learning how to express my feelings and show my way of loving you.`
},

{
title:"Chapter Three\nThe Things I Started to Understand and Feel",

content:`As time went by, we shared so many moments together.

And that was when I experienced jealousy for the first time.

I felt jealous of your friends, of the people who seemed to make you so happy whenever you talked to them.

Without realizing it, I eventually understood that you had once felt the same way when I spent time with my own friends.

I understood that feeling. That's why I slowly started reducing my conversations with some of my friends, simply because I wanted to spend more of my time with you and make you feel more comfortable. I don't know if you still remember those moments or not, because I remember every single one of them. Maybe you've forgotten some of the moments we shared, but I still remember them.

Whenever I felt jealous of you, I also felt guilty. Guilty because you had once experienced those same feelings because of me. So I never really had the heart to limit you. After all, you're an adult. You're not a child anymore. I trust that you know how to respect boundaries and understand what's right and what's wrong.

Maybe I was really annoying back then. It probably felt like you were being interrogated every single day. Honestly, sometimes I lose my sense of reason when I love someone too deeply.

And sometimes, I even lose my common sense.

Little by little, I got to know more about your past. I was happy when you started trusting me enough to tell me about your childhood, your friends, and the challenges you had faced throughout your life.

From all those stories, I saw someone with a big heart.

Someone with so much empathy, someone who was always willing to help others whenever they needed you.

That was one of the things I admired most about you.

But as the days went by

I started feeling that something was changing.

Little by little, I felt you becoming colder toward me.

Those feelings made me think about so many things.

I tried to ask you honestly.

Sometimes, I even kept pushing you to tell me what was really happening because I genuinely wanted to understand.

And eventually, you answered me honestly.

After that, a misunderstanding happened between us, and it left both of us hurt and disappointed.

You were disappointed because I tested you.

I understand why that hurt you.

Looking back now, I know the way I handled my fear wasn't the right way.

But I want you to know.

My intention was never to play with your feelings.

I was only trying to find an answer to the fear inside my own mind.

I wanted to know whether the changes I felt were real or if they only came from my own thoughts.

I wanted to prove to myself that maybe I was simply overthinking,and I'm sorry that I'm not very good at expressing my feelings or asking things directly.

I was only trying to see how you would react when the opportunity came, remembering how we first met. What I know about you is that you're someone who's interested in people's stories, the way they think, and the lives they live. That curiosity sometimes makes you want to get to know someone better, whether it's a girl who caught your attention or someone who simply started a conversation with you and i dunno why i feel u interesting with someone how she talk how is she when give opinion or whatever make u interest 

Maybe, to you, all of that was completely normal.

But from my perspective, it made me wonder what your intentions really were.

Sometimes, I was afraid of losing someone I had grown to love so deeply. But what frightened me even more was the thought of being kept, not because I was truly loved, but simply because I wasn't truly being let go its too much i know,sometimes i feel change not like before who was i dont care about relationship but also now im being look like stupid and lost my logic

Maybe all of that was only my opinion and the way I saw things. If what I said was wrong, just tell me. But if it was true, that's okay too. I'll understand.

Maybe, all this time, we were simply trying to protect ourselves in different ways.

You only wanted to be understood.

And I only wanted to feel safe.

But sometimes, without even realizing it, our fears became the very thing that caused us to hurt each other.`
},

{
title:"Chapter Four\nDéjà Vu",

content:`I  tried to protect your feelings.

 Little by little, I let go of the things I thought might make you uncomfortable.

Like I mentioned before, I reduced my conversations with some of my male friends

I also kept my distance from people who I thought might create doubts between us.

Whenever you told me that someone might have feelings for me, you never told me to stay away from them or forced me to do so. But if you believed they truly liked me, I chose to ignore them, and I even blocked some of them because I knew it would make you feel uncomfortable.

I did all of those things because I loved you.

Because to me, my partner's comfort has always been important.

But sometimes, quietly

I found myself wondering.

Did you ever do the same for me?

I'm not saying that I was right and you were wrong. I never really expected you to do exactly the same, either.

I only wanted us to see this relationship from both sides.

Because maybe, all this time, we were both trying.



We were just trying in different ways.

you've probably experienced bad things  that still lingers, or fears that you still carry with you or maybe no,

and I never truly hated you.

I was only a little tired.

Not tired of loving you.

But tired of constantly wondering whether you still loved me the same way you did before or maybe no

I also remember when you told me about someone from your past (your ex.)

At that moment, i felt or maybe i simply saw it that way—that there was still a small part of your heart that remained curious about their lives. You even knew when they had a new partner or when their partner was celebrating a birthday.

Don't worry, I'm not insecure.

I just felt that, deep down, there was still a small part of your feelings that hadn't completely disappeared.

Not bcoz u were still in love with them.

But maybe bcoz the love they gave u was the kind of love you had always wanted, or because it felt real. Maybe they gave you the affection you had needed for so long, and perhaps those memories the touch, the moments, or whatever you shared still stayed with u.

The one thing that hurt you the most was that they lied to u, betrayed u, or chose someone else over u.

Sometimes, I wonder

Was that the reason you kept looking for someone who would stay and never leave you?`
},

{
title:"Chapter Four\nTrying to Find My Way Back",

content:`You once asked me to become the person I used to be.

You wanted me to love you the way I did in the beginning, without constantly being trapped by my fears.

And I truly tried.

I tried to become someone who could laugh again, make jokes, and bring happiness into your life.

I wanted us to enjoy this relationship again without being controlled by fear and overthinking.

But

There was one thing you said that quietly stayed in my heart.

When you told me that I was your escape.

Maybe you didn't mean it the way I understood it,but that's okay. It makes me happy when you say i make u feel comfortable and safe. 💗

But those words still felt like a knife to my heart xixi 

 I truly believed I was someone you wanted to build a future with.

Someone you wanted to call home, grow old with, and love until the end of our lives.

But the moment I heard those words from you, I started questioning myself.

Was I just someone who came into your life at the right time... or maybe the wrong time?

Was I only someone who filled an empty space in your heart?

Making someone smile is a beautiful thing. But even the clown who keeps making everyone laugh eventually gets tired and secretly wishes someone would make them smile too.

Don't worry, you're not the clown.

Neither am I.

I still remember the moments when you made me smile.

If I'm being honest, why do I still remember them so clearly?

Every time I tried to become the person I used to be, every time I tried to bring back the warmth between us...

I felt you slowly becoming more distant. Sometimes you even seemed cold... or maybe you were only pretending to be cold. Maybe pretending not to care.

Or maybe it was only my own feelings.

I'm sorry.

I don't know why, but whenever I think about something, I always follow my feelings instead of my logic.

Even so, I kept trying to think positively.

I kept telling myself that maybe you were tired, busy, or dealing with something you couldn't explain yet.

So every single day, I kept learning the same word.

Understanding.

I tried to understand your feelings.

I tried to understand your actions.

I tried to understand your changes.

Until, little by little, I forgot how to understand myself.

You were always honest with me, and I truly appreciated that.

But sometimes, the words "I love you" felt different from the first time you said them.

Back then, I could feel the certainty behind those words.

Now, sometimes I feel like they're only said to calm my worries.

Maybe I'm wrong.

But that's honestly how I feel.

I often ask myself.

Why does loving someone sometimes feel harder than I ever imagined?

Why does something that should feel easy and peaceful sometimes become a place that leaves me confused?

I have never regretted loving you.

If I had the chance to start everything all over again.

I think I would still choose to know you.

Because through you, I learned so much about myself.

I learned that loving someone else should never mean losing myself.

Those are two different things.

I've told you so many things about my life

About who I am and what I'm really like.

When I think about it, I feel like I talked to you about my life almost every day.

Not everyone truly knows me.

Not everyone gets this premium access to my life.

Sometimes I think I talk way too much around you.

Maybe it should have been the other way around.

Maybe I should have listened more.

You could have talked endlessly to me too.`
},

{

title:"Chapter Six\nA Few Things I Never Said",

content:`Before i met u, I was the kind of person who avoided saying cheesy or romantic things. They always made me cringe. But somehow, for you, I did it anyway. Not because it came naturally, but because I truly loved you.

When I look at you, I see someone with a kind of empathy that many people don't notice. I see someone incredibly strong, someone who is always willing to help others no matter the situation. Someone who kept moving forward despite every storm life threw at him. And somehow, you always made it through. But I also see someone who sometimes becomes so busy taking care of everyone else that he forgets to take care of himself, someone who may be tired too, even if he rarely shows it.

That's only what I can see from my point of view. The rest, only you truly know. Only you know what's in your heart, including the things you may have never told anyone.

Maybe I don't compliment you very often. It's not because I don't appreciate you. I just never really knew how to turn beautiful feelings into beautiful words. But I kept learning to understand you. Sometimes my feelings stay hidden between the lines, and I know that may have left you feeling confused, or even made you think I saw you in a bad way. I also realize that sometimes my words didn't always match my actions. I was aware of that, and I always tried to change what I knew was wrong. I also know... I still have a lot to learn before I can become a better person.

Life has never been only about love.

We both have our own dreams, our own future, and our own responsibilities. There are jobs to pursue, friends to care about, and battles that no one else can fight for us. We both get tired. We both carry burdens that we're trying to overcome.

I truly admire you. You're calm, easygoing, and able to solve problems. You're brave enough to face them. Before I met you, I always avoided anything that made me feel like things would only get worse. Maybe because, at that time, I didn't know, and no one had ever taught me how to face or solve problems, whether on my own or together with someone else. But then I learned from you. Little by little, I discovered a world I had never known before. I learned so many things from you.

You were also the one who taught me that it's okay to say "no" when I don't feel comfortable. Honestly, you were the first person who ever told me that. It was so different from what I had experienced before. Whenever I said "no," I was met with anger or punishment. Because of you, I learned that protecting my own boundaries isn't something I should feel guilty about.

I really want to see you smile. And if one day I get to see you standing where you've always dreamed of being, whether it's in your career or any dream you're chasing, I think I'll be just as happy as you are.

We both have our own lives in the real world. Our own paths to walk.

And more than anything, I hope we both succeed in reaching the futures we're fighting for.`
},

{
title:"Epilogue",

content:`When you were willing to respect my boundaries, even though I knew it wasn't easy for you, I appreciated it more than you probably realized.

At the same time, it hurt me to see you struggling if those changes were making you unhappy.

Sometimes I wondered...

If this relationship was really that difficult, why did you still choose me?

You could have been with someone who made everything easier, or someone who could give you everything you were looking for.

So I kept asking myself... what was it that you saw in me?

Maybe your answer would simply be, 'Because I love you.' And maybe that was true. But somehow, I felt there was something deeper, something that perhaps even you couldn't explain with words.

I felt that sometimes you had your own doubts too, and that was okay.

You were only human.

I didn't want you to stay because you felt like you had to, or because leaving was harder.

I only wanted you to stay if you were truly choosing me.

If one day you decided that this relationship was no longer something you wanted...

I wouldn't force you to stay.

But there is one lesson I will always carry with me.

I learned not to mistake comfort for love too quickly.

The comfort we feel in the beginning doesn't always reveal who someone truly is.

Love isn't only about how someone makes us feel at first, but about how we continue choosing each other after we've seen each other's flaws, wounds, and imperfect sides.

I don't know how our story will end.

But whatever happens...

I'm also sorry that I still couldn't make your wishes come true.

I know there were things you hoped for that I wasn't able to give you, and I'm sorry for that.

Thank you for being a part of my life.

And if one day our paths have to go in different directions, I hope we both carry the lessons from this relationship, not the wounds that we would otherwise carry for the rest of our lives.`
}

];

// ==========================
// CURRENT PAGE
// ==========================

let current = 0;


// ==========================
// SHOW CHAPTER
// ==========================

function showChapter(){

    chapterTitle.style.opacity="0";
    chapterContent.style.opacity="0";

    setTimeout(()=>{

        chapterTitle.innerHTML =
        chapters[current].title.replace("\n","<br>");

        chapterContent.innerText =
        chapters[current].content;

        pageNumber.innerText =
        `${current+1} / ${chapters.length}`;

        progressBar.style.width =
        ((current+1)/chapters.length)*100+"%";

        chapterTitle.style.opacity="1";
        chapterContent.style.opacity="1";

    },300);

    prevBtn.disabled = current === 0;
nextBtn.disabled = false;

if (current === chapters.length - 1) {
    nextBtn.textContent = "Finish";
} else {
    nextBtn.textContent = "Next";
}

}


// ==========================
// NEXT
// ==========================

nextBtn.addEventListener("click",()=>{

    if(current < chapters.length-1){

        current++;

        showChapter();

    }else{

        book.style.display="none";

        endingPage.style.display="flex";

    }

});


// ==========================
// PREVIOUS
// ==========================

prevBtn.addEventListener("click",()=>{

    if(current>0){

        current--;

        showChapter();

    }

});


// ==========================
// RESTART
// ==========================

restartBtn.addEventListener("click",()=>{

    endingPage.style.display="none";

    book.style.display="flex";

    current=0;

    showChapter();

});
  
// ==========================
// MUSIC
// ==========================

const bgMusic = document.getElementById("bgMusic");
const playMusic = document.getElementById("playMusic");

playMusic.addEventListener("click", () => {
    bgMusic.play();
});

