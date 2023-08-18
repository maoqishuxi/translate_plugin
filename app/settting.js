export default function Settings({ text, handleText, isSetting }) {
  return (
    <div className="mx-2 bg-purple-200 ">
      <div className="flex justify-between first:mx-1 py-1">
        <label>token:</label>
        <input
          className="border-2"
          type="text"
          value={text}
          onChange={handleText}
        />
      </div>
      <div className="flex justify-around">
        <button onClick={isSetting}>ok</button>
        <button onClick={isSetting}>cancle</button>
      </div>
    </div>
  );
}
