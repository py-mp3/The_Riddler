import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";

type Riddle = {
  riddle: string;
  answer: string;
}

export default function Index() {
  const [riddle, setRiddle] = useState<string>();
  const [answer, setAnswer] = useState<string>();
  const  [showAnswer, setShowAnswer] = useState<boolean>(false);
  async function get_riddle() {
    const response = await fetch("https://riddles-api.vercel.app/random")
    const data : Riddle = await response.json();
    setRiddle(data.riddle);
    setAnswer(data.answer);
    setShowAnswer(false);
    }
  function showAnswerFunction() {
    setShowAnswer(true);
  }
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Click for a Joke of a riddle</Text>
      <Button title="Get Riddle" onPress={get_riddle}/>
      <Text>{riddle}</Text>
      <Button title="Answer" onPress={showAnswerFunction}/>
      {showAnswer && <Text>{answer}</Text>}

    </View>
  );
}