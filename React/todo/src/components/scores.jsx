import { useScoreLogger } from "../hooks/Scores";

const Scores = () => {
   const { state, add, remove } = useScoreLogger();
   add("Yoel", 40);
   return <div>Hi</div>;
};

export default Scores;
