import "./style.css";

function PageTitle(props) {
    const {title} = props;
    return (
      <div className="page-title">
        <u>{title}</u>
      </div>
    );
  }
  
export default PageTitle;