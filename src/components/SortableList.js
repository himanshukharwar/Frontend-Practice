const heading = {
  color: "#2f2f2f",
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function SortableList() {
  return (
    <>
      <h1 className={heading}>Select your top 5 tech skills</h1>
      <div className={container}>
        <ListItems />
        <SuggestedSkills />
      </div>
    </>
  );
}

function ListItems() {
  return <div></div>;
}

function SuggestedSkills() {
  return (<div></div>);
}

export default SortableList;
