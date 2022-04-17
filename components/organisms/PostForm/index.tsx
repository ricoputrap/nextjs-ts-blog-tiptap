import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import Button from '../../atoms/Button';
import EditorMenuBar from '../../molecules/EditorMenuBar';
import { Actions, InputTitle } from './index.styles';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: `<div>Let's tell the world your great stories!</div>`
  });

  const onSubmit = async (e: React.MouseEvent) => {
    if (!title) return;
    e.preventDefault();
    
    const body = editor?.getHTML();
    if (!body || body == "<p></p>") return;

    const data = { title, body }

    const URL = "https://62598fb5cda73d132d173293.mockapi.io/api/v1/posts";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      const id = res.id;
      window.location.replace(`/${id}`)
    })
    .catch(error => console.error("ERROR:", error))
  }

  return (
    <div className='container'>
      <form>
        <InputTitle
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Awesome Title"
          required
        />
        <EditorMenuBar editor={editor} />
        <EditorContent editor={editor} />
        <Actions>
          <Button
            label='Cancel'
            onClick={() => console.log("CANCEL")}
          />
          <Button
            label='Publish'
            onClick={onSubmit}
            type="submit"
            primary
          />
        </Actions>
      </form>
    </div>
  )
}

export default PostForm