export interface Workers {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  linkedIn: string;
}
export interface IMenagementBoard {
  id: number;
  image: String;
  title: string;
  preTitle: string;
  description: string;
}

export interface IAboutPage {
  title: string;
  description: string;
  aboutKrik: [
    {
      id: string;
      title: string;
      content: string;
    }
  ];
  commonQuestions: [
    {
      id: string;
      question: string;
      answer: string;
    }
  ];
}

export interface HomePage {
  id: string;
  longTerm: boolean;
  image: string;
  name: string;
  age: string;
  country: string;
  description: string;
  projects: [
    {
      id: string;
      image: string;
      date: string;
      description: string;
      seeMore: "string";
      state: boolean;
    }
  ];
}
export interface HomePage {
  title: string;
  preTitle: string;
  textContent: string;
  button: string;
  soon: {
    black: {
      title: string;
      pretitle: string;
      description: string;
      seemoreBtn: string;
      signInBtn: string;
    };
    white: {
      title: string;
      place: string;
      time: string;
      date: string;
      motnth: string;
    };
  };
  krikSucces: [
    {
      number: string;
      text: string;
    }
  ];
  news: [
    {
      id: string;
      name: string;
      date: string;
      text: string;
      image: string;
    }
  ];
  partners: [
    {
      image: string;
    }
  ];
}
export interface IVolonteer {
  id: string;
  longTerm: boolean;
  image: string;
  name: string;
  age: string;
  country: string;
  description: string;
  projects: [
    {
      id: string;
      image: string;
      date: string;
      description: string;
      state: boolean;
    }
  ];
}
export interface IProject {
  id: string;
  image: string;
  date: string;
  description: string;
  pupose: string;
  completition: string;
  state: boolean;
  title: string;
  photos: [
    {
      id: string;
      image: string;
    },
    {
      id: string;
      image: string;
    },
    {
      id: string;
      image: string;
    }
  ];
}
export interface INewsMonth {
  month: string;
  year: string;
  description: string;
}

export interface INews {
  months: [
    {
      id: string;
      month: string;
      year: string;
      description: string;
      slug: string;
    }
  ];
  allnews: [
    {
      id: string;
      title: string;
      desc: string;
      description: string;
      slug: string;
      date: string;
      image: string;
      photos: [
        {
          id: string;
          image: string;
        }
      ];
    }
  ];
}

export interface ISingleNews {
  id: string;
  title: string;
  desc: string;
  descriptionOne: string;
  descriptionTwo: string;
  slug: string;
  date: string;
  image: string;
  imageTwo: string;
  photos: [
    {
      id: string;
      image: string;
    }
  ];
}
