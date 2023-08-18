"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import Settings from "./settting";

export default function Home() {
  const [text, setText] = useState("");
  const [keyText, setKeyText] = useState("");
  const textareaRef = useRef(null);
  // 配置事件
  const [isSetting, setIsSetting] = useState(false);
  // 配置文本值
  const [valueSetting, setValueSetting] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (textareaRef.current) {
        textareaRef.current.blur();
      }
      setKeyText(text);
    }
  };

  const handlePaste = (e) => {
    setKeyText(e.clipboardData.getData("Text"));
  };

  return (
    <div className="w-[300px] max-h-[700px] bg-red-300 py-2">
      <Header isSetting={() => setIsSetting(!isSetting)} />
      {isSetting && (
        <Settings
          text={valueSetting}
          handleText={(e) => setValueSetting(e.target.value)}
          isSetting={() => setIsSetting(false)}
        />
      )}
      <InputBox
        placeholder="请输入文本翻译"
        text={text}
        handleChange={(e) => setText(e.target.value)}
        handleKeyDown={handleKeyDown}
        handlePaste={handlePaste}
        testareaRef={textareaRef}
      />
      <TranslateText text={keyText} />
    </div>
  );
}

function Header({ isSetting }) {
  return (
    <div className="flex justify-between bg-orange-300 mx-2">
      <div>置顶</div>
      <div>划词翻译</div>
      <div className="cursor-pointer" onClick={isSetting}>
        设置
      </div>
    </div>
  );
}

function InputBox({
  placeholder,
  text,
  handleChange,
  handleKeyDown,
  handlePaste,
  testareaRef,
}) {
  return (
    <div className="">
      <textarea
        className="mx-2 w-[284px] max-h-[300px] border-2"
        placeholder={placeholder}
        text={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        ref={testareaRef}
      ></textarea>
    </div>
  );
}

function TranslateText({ text }) {
  return <div className="bg-orange-200 mx-2 break-words">{text}</div>;
}
