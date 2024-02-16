export interface RestaurantInterface {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: {
    id: number;
    author: string;
    comment: string;
    stars: number;
  }[];
}

export interface CardProp {
  id: string;
  image: string;
  reviews: number;
  phone: string;
  email: string;
  address: string;
  parkinglot: boolean;
}

export interface CardInterface {
  image: string;
  businessname: string;
  restauranttype: string;
  reviews: number;
  id: string;
}

export interface ReviewsCardProp {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
