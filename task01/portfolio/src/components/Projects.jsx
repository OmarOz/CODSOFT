import "../style/Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div>
        <a href="https://omaroz.github.io/">
          <img></img>
          <div className="text">
            <div className="title">Tic Tac Toe</div>
            <div className="desc">
              a Tic Tac Toe game, two players take turns to place their symbol
              on a 3x3 grid. The two symbols used are "X" and "O." The goal is
              to be the first to get three of their symbols in a row, either
              horizontally, vertically, or diagonally. If all the spaces on the
              board are filled, and no player has won, the game is a draw.
            </div>
          </div>
        </a>
      </div>

      <div>
        <a href="https://r6smemorygame.netlify.app/">
          <img></img>
          <div className="text">
            <div className="title">Memory game</div>
            <div className="desc">
              A memory game with words is a fun and educational game that
              challenges players to match pairs of words by testing their memory
              and cognitive skills.
            </div>
          </div>
        </a>
      </div>

      <div>
        <a href="https://github.com/OmarOz/dummy-products">
          <img></img>
          <div className="text">
            <div className="title">Small Ecommerce with dummy products</div>
            <div className="desc">
              Small Ecommerce that you can view and add products
            </div>
          </div>
        </a>
      </div>

      <div>
        <a href="#">
          <img></img>
          <div className="text">
            <div className="title">Car design</div>
            <div className="desc">
              A simple Car design that show different car categories
            </div>
          </div>
        </a>
      </div>

      <div>
        <a href="https://github.com/OmarOz/profile-cards">
          <img></img>
          <div className="text">
            <div className="title">Profile cards</div>
            <div className="desc">
              A card design of different people profiles
            </div>
          </div>
        </a>
      </div>

      <div>
        <a href="https://github.com/OmarOz/Easy-Bank">
          <img></img>
          <div className="text">
            <div className="title">Easy Bank</div>
            <div className="desc">A static design of a Bank</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
