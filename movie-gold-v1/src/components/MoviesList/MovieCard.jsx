import "./MovieCard.css";
import { useRef, useState } from "react";

const MovieCard = ({
  //   showModelSnapshot = true,
  movie,
  //   isSelected,
  //   badge,
  //   children,
  //   actions,
  //   onDoubleClick,
  //   onClick,
  // height = 254,
}) => {
  // const Default_Width = 123;

  //   const divRef = useRef < HTMLDivElement > null;
  //   const actionsRef = useRef < HTMLDivElement > null; // Reference for actions element
  //   useDoubleClick({
  //     onSingleClick: (e) => {
  //       //Ensures onClick only triggers for clicks outside the actions element (ie. if the click target is NOT the actions element)
  //       if (!actionsRef.current?.contains(e.target as Element)) {
  //         onClick?.();
  //       }
  //     },
  //     onDoubleClick: (e) => {
  //       onDoubleClick?.();
  //     },
  //     ref: divRef,
  //     latency: 250
  //   });

  return (
    <div
      //   ref={divRef}
      className="movie-card-wrapper"
      // style={{ minHeight: `${height}px`, minWidth: `${Default_Width}px` }}
    >
      {/* <div className="project-card-snapshot"> */}
      {/* {actions && (
          <div ref={actionsRef} className={classes["actions"]}>
            {actions}
          </div>
        )} */}
      {/* <div className="model-snapshot">{movie.poster}</div> */}
      <div className="movie-card-poster">
        <img src={movie.poster} alt="" />
      </div>
      <p className="movie-title">{movie.title}</p>
      {/* {badge && <div className={classes["badge"]}>{badge}</div>} */}
      {/* </div> */}
      {/* <div className={`${classes["project-card-content"]} ${isSelected ? classes["selected"] : ""}`}>{children}</div> */}
    </div>
  );
};

export default MovieCard;
