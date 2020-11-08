const BirdBox = ({ birds }) => {
  return (
    <>
      {birds.map((bird, index) => (
        <div className="box-scene" key={index}>
          <div className="box">
            <div className="font face">
              <img
                src={bird.images.main}
                alt={`Imagen de ${bird.name.spanish}`}
              />
            </div>
            <div className="side face">
              <h2>{bird.name.spanish}</h2>
              <p>{bird.name.latin}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BirdBox;
