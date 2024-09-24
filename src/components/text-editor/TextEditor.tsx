/* eslint-disable import/no-named-as-default */
'use client';

import './editor.css';

import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import MenuBar from './MenuBar';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '<p>Hello World! 🌎</p>',
  });

  return (
    <>
      <MenuBar editor={editor} />
      <div className="w-full bg-line-assistive h-[1px]" />
      <EditorContent editor={editor} />
    </>
  );
};

export default TextEditor;
