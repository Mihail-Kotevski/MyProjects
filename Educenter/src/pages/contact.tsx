import { GetStaticProps } from "next";
import PageTitle from "../components/elements/PageTitle";
import ContactPage from "../components/templates/ContactPage";

export interface IContact {
  title: string;
  first_content_block: string;
  second_content_block: string;
  address: string;
  city: string;
  postal_code: string;
  phone: string;
}
interface ContactProp {
  data: IContact;
}
export default function contact({ data }: ContactProp) {
  console.log(data);
  return (
    <>
      <PageTitle title={data.title} content={data.first_content_block} />
      <ContactPage {...data} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let ress = await fetch("http://localhost:5001/contact_page");
  let data: IContact = await ress.json();

  return {
    props: {
      data,
    },
  };
};
