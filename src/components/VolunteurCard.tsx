import { IVolonteer } from "@/interfaces/types";
import Link from "next/link";
import volunteurCard from "@/styles/components/VolunteerCard.module.scss";

interface Props {
  data: IVolonteer;
}
const VolunteeurCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/volunteers/${data.id}`}
      className={volunteurCard.volunteurCard}
      id={data.id}
    >
      <img src={data.image} alt="" />
      <div className="">
        <p className="M">{data.name}</p>
        <span className="XS">
          {data.age} години, {data.country}
        </span>
      </div>
    </Link>
  );
};

export default VolunteeurCard;
