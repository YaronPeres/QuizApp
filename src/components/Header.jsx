import QuizLogo from "../assets/quiz-logo.png";
function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="The Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;
