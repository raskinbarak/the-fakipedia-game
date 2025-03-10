import React, { useState, useEffect } from "react";
import "./App.css";  // Import custom CSS for styles

interface Article {
  id: string;
  title: string;
  snippet: string;
  isFake: boolean;
  url?: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Yair Netanyahu",
    snippet:
      "Yair Netanyahu  is an Israeli podcaster and political activist. He is the eldest son of Benjamin Netanyahu.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Yair_Netanyahu",
  },
  {
    id: "2",
    title: "Cryptozoology",
    snippet:
      "Cryptozoology is a pseudoscience and subculture that searches for and studies unknown, legendary, or extinct animals whose present existence is disputed or unsubstantiated, particularly those popular in folklore, such as Bigfoot, the Loch Ness Monster, Yeti, the chupacabra, the Jersey Devil, or the Mokele-mbembe.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Cryptozoology",
  },
  {
    id: "3",
    title: "Set construction",
    snippet:
      "Set construction is the process undertaken by a construction manager to build full-scale scenery, as specified by a production designer or art director working in collaboration with the director of a production to create a set for a theatrical, film, or television production.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Set_construction",
  },
  {
    id: "4",
    title: "Tachyon",
    snippet:
      "A tachyon or tachyonic particle is a hypothetical particle that always travels faster than light. Physicists believe that faster-than-light particles cannot exist because they are inconsistent with the known laws of physics.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Tachyon",
  },
  {
    id: "5",
    title: "Amazonian Guard",
    snippet:
      "The Amazonian Guardwas an unofficial name given to an all-female elite cadre of bodyguards officially known as the Revolutionary Nuns tasked with protecting Muammar Gaddafi, the leader of Libya from 1969 to 2011.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Amazonian_Guard",
  },
  {
    id: "6",
    title: "Ayalla Ben Gvir",
    snippet:
      "Ayalla Ben Gvir is an Israeli activist and public figure known for her right-wing nationalist views and advocacy for Israeli sovereignty and security. She is the spouse of Itamar Ben Gvir, a prominent Israeli politician and member of the Knesset, holding a significant role within the social and political landscape of Israel.",
    isFake: true,
  },
  {
    id: "7",
    title: "Folly",
    snippet:
      "In architecture, a folly is a building constructed primarily for decoration, but suggesting through its appearance some other purpose, or of such extravagant appearance that it transcends the range of usual garden buildings.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Folly",
  },
  {
    id: "8",
    title: "Gideon’s Glass",
    snippet:
      "Gideon’s Glass is an alleged optical phenomenon first described in the late 19th century by amateur astronomer Elias Gideon, who claimed to have witnessed an unexplained refraction of light in the sky over the North Sea.",
    isFake: true,
  },
  {
    id: "9",
    title: "Pizza farm",
    snippet:
      "A pizza farm can be both a farm-based food-service establishment that sells pizza or a demonstration farm that educates visitors about agriculture by growing pizza ingredients, sometimes on a circular piece of land partitioned into plots shaped like pizza slices.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Pizza_farm",
  },
  {
    id: "10",
    title: "The Montague Signal",
    snippet:
      "The Montague Signal is an unidentified radio transmission anomaly first detected in 1967 by amateur radio enthusiasts across Europe. Characterized by an irregular sequence of beeping tones, distorted spoken numbers, and brief melodic fragments, the signal has defied consistent explanation for decades.",
    isFake: true,
  },
  {
    id: "11",
    title: "List of cities claimed to be built on seven hills",
    snippet:
      "The title City of Seven Hills usually refers to Rome, which was founded on seven hills. However, there are many other cities that make the same claim.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/List_of_cities_claimed_to_be_built_on_seven_hills",
  },
  {
    id: "12",
    title: "Westbury International University",
    snippet:
      "Westbury International University is a prominent, highly regarded institution of higher education located in San Francisco, California.",
    isFake: true,
  },
  {
    id: "13",
    title: "Rocket garden",
    snippet:
      "A rocket garden or rocket park is a display of missiles, sounding rockets, or space launch vehicles, usually in an outdoor setting.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Rocket_garden",
  },
  {
    id: "14",
    title: "The 1987 Boston Blackout",
    snippet:
      "The 1987 Boston Blackout was a mysterious and unexplained power failure that affected large parts of Boston, Massachusetts, on the night of September 14, 1987. Unlike typical blackouts caused by storms or infrastructure failure, no official cause was ever determined, and the event remains one of the most unusual electrical failures in U.S. history.",
    isFake: true,
  },
  {
    id: "15",
    title: "Spite house",
    snippet:
      "A spite house is a building constructed or substantially modified to irritate neighbors or any party with land stakes. Because long-term occupation is not the primary purpose of these houses, they frequently sport strange and impractical structures.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Spite_house",
  },
  {
    id: "16",
    title: "Reinaldo Dalcin",
    snippet:
      "Reinaldo Dalcin is a Brazilian model, mechanical engineer and beauty pageant titleholder who winner of the Mister Brazil 2013.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Reinaldo_Dalcin",
  },
  {
    id: "17",
    title: "Valeriepieris circle",
    snippet:
      "A Valeriepieris circle is a figure drawn on the Earth's surface such that the majority of the human population lives within its interior.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Valeriepieris_circle",
  },
  {
    id: "18",
    title: "Lance Berrington",
    snippet:
      "Lance Berrington was a British experimental chef, food historian, and television personality known for his unconventional approach to traditional cuisine.",
    isFake: true,
  },
  {
    id: "19",
    title: "Crispy Maple-Miso Tofu Stack",
    snippet:
      "The Crispy Maple-Miso Tofu Stack is a contemporary, plant-based dish that combines crispy tofu, roasted vegetables, and quinoa, all drizzled with a maple-miso glaze.",
    isFake: true,
  },
  {
    id: "20",
    title: "Great Stork Derby",
    snippet:
      "The Great Stork Derby was a contest held from 1926 to 1936. Female residents of Toronto, Ontario, Canada, competed to produce the most babies in order to qualify for an unusual bequest in a will.",
    isFake: false,
    url: "https://en.wikipedia.org/wiki/Great_Stork_Derby",
  },
];


const Result = ({ result }: { result: string }) => {
  if (!result) return null;

  const alertClass = result.includes("✅") ? "alert-success" : "alert-danger";

  return <div className={`alert ${alertClass}`}>{result}</div>;
};

function NewGameButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="new-game-button" onClick={onClick}>
      Fresh Set
    </button>
  );
}

function Heading() {
  return (
    <>
      <div className="heading-container">
        <img src="Fakipedia's_F.svg.png" alt="Fakipedia Logo" className="logo" />
        <h2 className="heading-title">Fakipedia</h2>
      </div>
      <h5 className="heading-subtitle">
        Can you spot the <span className="highlight">FAKE article</span> from the <span className="highlight">REAL ones</span>?
      </h5>
    </>
  );
}

export default function App() {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [correctArticle, setCorrectArticle] = useState<Article | null>(null);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    let newArticleList: Article[] = [];
    let newFakeArticle: Article | null = null;

    do {
      const realArticles = articles.filter((article) => !article.isFake).sort(() => 0.5 - Math.random()).slice(0, 3);
      const fakeArticles = articles.filter((article) => article.isFake);
      const fakeArticle = fakeArticles[Math.floor(Math.random() * fakeArticles.length)];

      newArticleList = [...realArticles, fakeArticle].filter(Boolean).sort(() => 0.5 - Math.random());
      newFakeArticle = fakeArticle || null;
    } while (newArticleList.some((newArticle) => articleList.some((oldArticle) => oldArticle.id === newArticle.id)));

    setArticleList(newArticleList);
    setCorrectArticle(newFakeArticle);
    setResult("");
  };

  const handleSelect = (article: Article) => {
    setSelectedArticle(article);

    if (article.isFake) {
      setResult("✅ Awesome! You got it right!");
      setTimeout(() => {
        fetchArticles();
      }, 1500);
    } else {
      if (article.url) window.open(article.url, "_blank");
      setResult("❌ Oops! That's a real article!");
    }
  };

  return (
    <div className="container">
      <Heading />
      <div className="article-list">
        {articleList.map((article) => (
          <div
            key={article.id}
            className={`article-card ${selectedArticle?.id === article.id ? (article.id === correctArticle?.id ? "correct" : "incorrect") : ""}`}
            onClick={() => handleSelect(article)}
          >
            <div className="article-card-body">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-snippet">{article.snippet}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="result-container">
        <Result result={result} />
      </div>
      <NewGameButton onClick={fetchArticles} />
    </div>
  );
}
