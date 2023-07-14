function RedirectButton(props: { url: string; img: string; active: boolean }) {
  if (props.active) {
    return (
      <button className="active-button">
        <img style={{ width: "30px" }} src={props.img} />
      </button>
    );
  } else {
    return (
      <a href={props.url}>
        <button className="notactive-button">
          <img style={{ width: "30px" }} src={props.img} />
        </button>
      </a>
    );
  }
}

export default RedirectButton;
