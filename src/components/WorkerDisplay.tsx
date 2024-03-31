import { Workers } from "@/interfaces/types";
import ourworkers from "@/styles/OurWorkers.module.scss";
import Link from "next/link";

interface Prop {
  data: Workers;
}

const WorkerDisplay: React.FC<Prop> = ({ data }) => {
  return (
    <>
      <div className={ourworkers.worker} id={`${data.id}`}>
        <Link href={`/ourteam/${data.id}`}>
          <img src={data.image} alt={"name"} />
        </Link>
        <h2>{data.name}</h2>
        <p>{data.position}</p>
      </div>
    </>
  );
};

export default WorkerDisplay;