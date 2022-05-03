// creating array for trending section

let trendingarr = 
[
  {
    name: "Harry Potter and the cursed child",
    author: "J.K Rowling",
    price: 900,
    img: "../images/fantasy/harry.jpg",
  },
  {
    name: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: 600,
    img: "../images/crime/sherlock2.jpg",
  },
  {
    name: "The Martain",
    author: "Andy Weir",
    price: 1200,
    img: "../images/scifi/martian.jpg",
  },
  {
    name: "Think And Grow Rich",
    author: "Napolean Hill",
    price: 600,
    img: "../images/business/gorwrich.jpg",
  },
  {
    name: "Brothers Grimm",
    author: "Maria Tattar",
    price: 600,
    img: "../images/fantasy/brothers.jpg",
  },
  {
    name: "Happiness Hypothesis",
    author: "Jonathan Haidt",
    price: 300,
    img: "../images/self help/happiness.jpg",
  },
];

let trending = document.querySelector(".trending");

const newtrend = trendingarr
  .map((t) => {
    return `
    <div class="tmainsec">
        <div class="bookimg"><img src="${t.img}"></div>
        <div class="book-content">
            <div class="name"><h1>Name:${t.name}</h1></div>
            <div class="author"><h1>Author:${t.author}</h1></div>
            <div class="price"><h1> Price: Rs. ${t.price}</h1></div>
            <button class="addtocart" onclick="added(this)">Add To Cart</button>
        </div>
    </div>
    `;
  })
  .join("");

trending.innerHTML = newtrend;

//adding alert to addtocart button
const addtocart = document.querySelector(".addtocart");
function added(obj) {
  if (obj.innerHTML == "Add To Cart") {
    alert("Item added to cart successfully");
    obj.innerHTML = "Remove From Cart";
  } else {
    obj.innerHTML = "Add To Cart";
  }
}

// creating array for foryou section
let foryouarr = [
  {
    name: "Atomic Habits",
    author: "James Clear",
    price: 600,
    img: "../images/self help/atomic.jpg",
  },
  {
    name: "Think And Grow Rich",
    author: "Napolean Hill",
    price: 600,
    img: "../images/business/gorwrich.jpg",
  },
  {
    name: "Hyper Focus",
    author: "Chris Bailey",
    price: 500,
    img: "../images/self help/hyper.jpg",
  },
  {
    name: "Rich dad Poor dad",
    author: "Robert T. Kiyosaki",
    price: 700,
    img: "../images/business/rich.jpg",
  },
];

let ForYou = document.querySelector(".ForYou");

const newforyou = foryouarr
  .map((f) => {
    return `
    <div class="mainsec">
        <div class="bookimg"><img src="${f.img}"></div>
        <div class="book-content">
            <div class="name"><h1>Name:${f.name}</h1></div>
            <div class="author"><h1>Author:${f.author}</h1></div>
            <div class="price"><h1> Price: Rs. ${f.price}</h1></div>
            <button class="addtocart" onclick="added(this)">Add To Cart</button>
        </div>
    </div>
    `;
  })
  .join("");

ForYou.innerHTML = newforyou;


// creating array for top picks
let toppicksarr = [
  {
    name: "The Book Of Time",
    author: "Kate Chopin",
    price: 190,
    img: "../images/action/time.jpg",
  },
  {
    name: "Brothers Grimm",
    author: "Maria Tattar",
    price: 600,
    img: "../images/fantasy/brothers.jpg",
  },

  {
    name: "Happiness Hypothesis",
    author: "Jonathan Haidt",
    price: 300,
    img: "../images/self help/happiness.jpg",
  },

  {
    name: "The Kingdom",
    author: "Jo Nesbø",
    price: 700,
    img: "../images/scifi/kingdom.jpg",
  },
];
let toppicks = document.querySelector(".toppicks");

const newtoppicks = toppicksarr
  .map((f) => {
    return `
    <div class="mainsec">
        <div class="bookimg"><img src="${f.img}"></div>
        <div class="book-content">
            <div class="name"><h1>Name:${f.name}</h1></div>
            <div class="author"><h1>Author:${f.author}</h1></div>
            <div class="price"><h1> Price: Rs. ${f.price}</h1></div>
            <button class="addtocart" onclick="added(this)">Add To Cart</button>
        </div>
    </div>
    `;
  })
  .join("");

toppicks.innerHTML = newtoppicks;

// for implementing search in index(Home) page
let allarr = [
  {
    name: "Reebeca",
    author: "Daphne du Maurier",
    price: 200,
    desc: "Rebecca is a 1938 Gothic novel written by English author Daphne du Maurier. The novel depicts an unnamed young woman who impetuously marries a wealthy widower, before discovering that both he and his household are haunted by the memory of his late first wife, the title character.",
    img: "../images/crime/reebeca.jpg",
  },

  {
    name: "Susanna's Seven Husband",
    author: "Rusik Bond",
    price: 600,
    desc: "Over the years, Arun watches as Susanna becomes notorious as the merry widow who flits from one marriage to another, leaving behind a trail of dead husbands. It is only a matter of time before he too begins to wonder if there is any truth to the slanderous gossip surrounding the woman he is in love with.",
    img: "../images/crime/seven.jpg",
  },

  {
    name: "The Silence Of The Lamb",
    author: "Thomas Harris",
    price: 700,
    desc: "Thomas Harris' The Silence of the Lambs is a fictional novel that tells the tale of FBI agent Clarice Starling and her quest to find a serial killer who has been abducting women. However, in order to think like a serial killer, she must learn how the mind works in such a criminal.",
    img: "../images/crime/silence.jpg",
  },

  {
    name: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: 800,
    desc: "Sherlock Holmes is the world's only consulting detective. Money and prestige don't interest him, simply the chance to flex his intellectual muscles and practise his unique method of deduction are enough.",
    img: "../images/crime/sherlock.jpg",
  },
  {
    name: "The Book Of Time",
    author: "Kate Chopin",
    price: 190,
    desc: "The trilogy follows fourteen-year-old Sam Faulkner as he travels through time and around the world via a strange statue and some unusual coins with holes in them to find his missing father.s",
    img: "../images/action/time.jpg",
  },

  {
    name: "Percy Jackson",
    author: "Rick Riordean",
    price: 300,
    desc: "Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction.",
    img: "../images/action/percy.jpg",
  },

  {
    name: "Corsana",
    author: "Charles Wellington II",
    price: 250,
    desc: "In Corsana: The Phalanx Syndicate by Charles Wellington II, one learns to become a hero by acting, not dreaming. Christopher Knight, or CK, has held a secret close to his heart since he can remember. He is a psionic; he has the power to make things happen just by using his mind",
    img: "../images/action/corsana.jpg",
  },

  {
    name: "Around The World in Eighty Days",
    author: "Jules Verne",
    price: 450,
    desc: "Jules Verne's Around the World in Eighty Days is a rip-roaring adventure story set primarily in Victorian England but spans the world following its protagonist Phileas Fogg.rip-roaring adventure story set primarily in Victorian England. this is a good book as per user review",
    img: "../images/action/world.jpg",
  },
  {
    name: "Think And Grow Rich",
    author: "Napoleon Hill",
    price: 190,
    desc: "Napoleon Hill researched more than forty millionaires to find out what made them the men that they were.Think and Grow Rich is the result of Hill's study of over five hundred self-made millionaires—a condensed, accessible explanation of his Law of Success philosophy, which includes thirteen steps to riches.",
    img: "../images/business/gorwrich.jpg",
  },

  {
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 300,
    desc: "I Will Teach You To Be Rich suggests maxing out your 401(k) to get the maximum from your employer (they will usually match your contribution, up to a certain point) and then also investing in a Roth IRA, another form of retirement plan, but one that you control, and lifecycle funds, which invest your money. ",
    img: "../images/business/rich.jpg",
  },

  {
    name: "The Millionaire FastLane",
    author: "MJ Demarko",
    price: 250,
    desc: "A must read book that will change the way you act, think and believe getting you to work smarter.The Millionaire Fastlane points out what's wrong with the old get a degree, get a job, work hard, retire rich model, defines wealth in a new way, and shows you the path to retiring young. Ironically, this is not a get-rich-quick book.",
    img: "../images/business/millio_fastlane.jpg",
  },

  {
    name: "The Intelligent Investor",
    author: "Benjamin Graham",
    price: 450,
    desc: "An intelligent investor always analyzes the long-term evolution and management principles of a company before investing. They always protect themselves from losses by diversifying investments. Intelligent investors never look for crazy profits, but focus on safe and steady returns.",
    img: "../images/business/intelligent_investor.jpg",
  },
  {
    name: "The Awakening",
    author: "Kate Chopin",
    price: 1000,
    desc: "The Awakening, novel by Kate Chopin, published in 1899. Originally titled A Solitary Soul, the novel depicts a young mother's struggle to achieve sexual and personal emancipation in the oppressive environment of the postbellum American South.",
    img: "../images/fantasy/awakening.jpg",
  },

  {
    name: "Brothers Grimm",
    author: "Maria Tattar",
    price: 600,
    desc: "The rise of romanticism in the 19th century revived interest in traditional folk stories, which to the brothers represented a pure form of national literature and culture. With the goal of researching a scholarly treatise on folk tales, they established a methodology.",
    img: "../images/fantasy/brothers.jpg",
  },

  {
    name: "Lord Of The Rings",
    author: "Jrr Tolkein",
    price: 700,
    desc: "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
    img: "../images/fantasy/lordof.jpg",
  },

  {
    name: "Mount Emily",
    author: "Low Ying Ping",
    price: 450,
    desc: "Mount Emily Revisited is the second in a series of books which centre on two time-traveling 13-year-old students at Mount Emily Girls' School. The books feature time travel with a strong focus on female teen friendship whilst exploring the girls' family backgrounds and how they deal with their very different problems.",
    img: "../images/fantasy/mount.jpg",
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    price: 190,
    desc: "In the book, James outlines the three layers of behaviour change; a change in your outcomes, process or a change in your identity. Each layer has a different focus – 'outcomes' is focussed on changing results, 'process' is on changing habits and systems and 'identity' is all about changing your beliefs.",
    img: "../images/self help/atomic.jpg",
  },

  {
    name: "Happiness Hypothesis",
    author: "Jonathan Haidt",
    price: 300,
    desc: "Self-help books often imply that if we're just self-aware enough in our daily lives, we can use our intellect to override our emotional instincts, willing ourselves to be happy. Instead, Haidt argues that we can best promote happiness and well-being through the emotional and unconscious parts of our brains.",
    img: "../images/self help/happiness.jpg",
  },

  {
    name: "Hyper Focus",
    author: "Chris Bailey",
    price: 250,
    desc: "Hyperfocus teaches you how to become more efficient and improve your concentration by deciding on one thing to work on, focusing only on that task, learning to understand when your mind has wandered and redirecting your attention back to your work, and thinking creatively when you're not working.",
    img: "../images/self help/hyper.jpg",
  },

  {
    name: "The Subtle Art Of Not Giving A F_ck",
    author: "Mark Manson",
    price: 450,
    desc: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life. In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people.",
    img: "../images/self help/not.jpg",
  },
  {
    name: "The Martain",
    author: "Andy Weir",
    price: 1200,
    desc: "The Martian tells the story of Mark Watney, an astronaut on the Ares 3 mission to Mars.After a terrible storm almost destroys the ship and the base, the crew of his ship believe he is dead.",
    img: "../images/scifi/martian.jpg",
  },

  {
    name: "Hunger Games",
    author: "Suzzane Collins",
    price: 400,
    desc: "The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death.",
    img: "../images/scifi/hunger.jpg",
  },

  {
    name: "The Kingdom",
    author: "Jo Nesbø",
    price: 700,
    desc: "In THE KINGDOM, Jo Nesbø unspools an almost Shakespearean tragedy of two brothers and their ill-fated reunion.",
    img: "../images/scifi/kingdom.jpg",
  },

  {
    name: "Six Wakes",
    author: "Maria Arena",
    price: 450,
    desc: "A space adventure set on a lone ship where the clones of a murdered crew must find their murderer -- before they kill again.",
    img: "../images/scifi/six wakes.jpg",
  },
];

const searchpage = document.querySelector(".searchpage");
const search = () => {
  let searchbox = document.querySelector("#searchbox").value.toUpperCase();
  let newarr = allarr.filter((newvalue) => {
    return newvalue.name.toUpperCase().includes(searchbox);
  });
  if (searchbox.length == "") {
    searchpage.style.display = "none";
  } else if (newarr.length > 0) {
    searchpage.style.display = "grid";
    let searchresult = newarr
      .map((ele) => {
        return `
            <div class="allmainsec">
              <div class="bookimg"><img src="${ele.img}"></div>
              <div class="texts">
                <div class="name"><h1>Name:${ele.name}</h1></div>
                <div class="author"><h1>Author:${ele.author}</h1></div>
                <div class="price"><h1> Price: Rs. ${ele.price}</h1></div>
                <div class="description"><h1>Description:</h1><p>${ele.desc}</p></div>
                <button class="addtocart" onclick="added(this)">Add To Cart</button>
              </div>
            </div>
            
            `;
      })
      .join("");
    searchpage.innerHTML = searchresult;
  }
};
