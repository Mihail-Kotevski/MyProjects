import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <ButtonGradient />
      <div className="pt-[4,75rem] lg:p-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          something
        </Button>
      </div>
    </>
  );
};

export default App;
