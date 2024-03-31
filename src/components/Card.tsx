import Link from "next/link";
import CardStyle from "@/styles/components/NewsCard.module.scss";

interface Prop {
  id: string;
  image: string;
  date: string;
  description: string;
  link: string;
}
const Card: React.FC<Prop> = ({ id, image, date, description, link }) => {
  return (
    <>
      <div
        key={id}
        className={CardStyle.cardComponent}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('${image}')`,
        }}
      >
        <div className={CardStyle.content}>
          <div>
            <span className="span-yellow">ACTIVNOSTI</span>
            <span className=" card-text">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.30498 6.36079V3.80078C8.30498 3.24078 8.74498 2.80078 9.30498 2.80078C9.86498 2.80078 10.305 3.24078 10.305 3.80078V6.36079C10.305 6.92079 9.86498 7.36079 9.30498 7.36079C8.74498 7.36079 8.30498 6.92079 8.30498 6.36079ZM15.705 7.36079C16.265 7.36079 16.705 6.92079 16.705 6.36079V3.80078C16.705 3.24078 16.265 2.80078 15.705 2.80078C15.145 2.80078 14.705 3.24078 14.705 3.80078V6.36079C14.705 6.92079 15.145 7.36079 15.705 7.36079ZM8.94498 10.8008H16.045C16.485 10.8008 16.845 10.4408 16.845 10.0008C16.845 9.56078 16.485 9.20078 16.045 9.20078H8.94498C8.50498 9.20078 8.14498 9.56078 8.14498 10.0008C8.14498 10.4408 8.50498 10.8008 8.94498 10.8008ZM20.105 4.20078H18.445C18.005 4.20078 17.645 4.56078 17.645 5.00078C17.645 5.44078 18.005 5.80078 18.445 5.80078H19.305V19.4008H5.70498V5.80078H6.56498C7.00498 5.80078 7.36498 5.44078 7.36498 5.00078C7.36498 4.56078 7.00498 4.20078 6.56498 4.20078H4.90498C4.46498 4.20078 4.10498 4.64076 4.10498 5.08076V20.2008C4.10498 20.6408 4.46498 21.0008 4.90498 21.0008H20.105C20.545 21.0008 20.905 20.6408 20.905 20.2008V5.08076C20.905 4.64076 20.545 4.20078 20.105 4.20078ZM11.845 5.80078H13.165C13.605 5.80078 13.965 5.44078 13.965 5.00078C13.965 4.56078 13.605 4.20078 13.165 4.20078H11.845C11.405 4.20078 11.045 4.56078 11.045 5.00078C11.045 5.44078 11.405 5.80078 11.845 5.80078ZM8.94498 14.4008H16.045C16.485 14.4008 16.845 14.0408 16.845 13.6008C16.845 13.1608 16.485 12.8008 16.045 12.8008H8.94498C8.50498 12.8008 8.14498 13.1608 8.14498 13.6008C8.14498 14.0408 8.50498 14.4008 8.94498 14.4008Z"
                  fill="white"
                />
              </svg>
              {date}
            </span>
          </div>
          <p className="card-text">{description}</p>
          <Link href={`${link}`} className="card-text">
            Види повеќе
          </Link>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 12H20.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 5.25L20.75 12L14 18.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Card;
