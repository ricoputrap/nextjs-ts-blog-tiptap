import { EditorContentProps } from '@tiptap/react'
import React from 'react'
import EditorMenuItem from '../../atoms/EditorMenuItem';
import { Container } from './index.styles';

const EditorMenuBar: React.FC<EditorContentProps> = ({ editor }) => {

  return (
    <Container>
      <EditorMenuItem 
        label='bold'
        clickHandler={() => editor?.chain().focus().toggleBold().run()}
        active={editor?.isActive('bold') || false}
      />
      <EditorMenuItem 
        label='italic'
        clickHandler={() => editor?.chain().focus().toggleItalic().run()}
        active={editor?.isActive('italic') || false}
      />
      <EditorMenuItem 
        label='strike'
        clickHandler={() => editor?.chain().focus().toggleStrike().run()}
        active={editor?.isActive('strike') || false}
      />
      <EditorMenuItem 
        label='code'
        clickHandler={() => editor?.chain().focus().toggleCode().run()}
        active={editor?.isActive('code') || false}
      />
      <EditorMenuItem 
        label='clear marks'
        clickHandler={() => editor?.chain().focus().unsetAllMarks().run()}
      />
      <EditorMenuItem 
        label='clear nodes'
        clickHandler={() => editor?.chain().focus().clearNodes().run()}
      />
      <EditorMenuItem 
        label='paragraph'
        clickHandler={() => editor?.chain().focus().setParagraph().run()}
        // active={editor?.isActive('paragraph') || false}
      />
      <EditorMenuItem 
        label='h1'
        clickHandler={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
        active={editor?.isActive('heading', { level: 1 }) || false}
      />
      <EditorMenuItem 
        label='h2'
        clickHandler={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor?.isActive('heading', { level: 2 }) || false}
      />
      <EditorMenuItem 
        label='h3'
        clickHandler={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor?.isActive('heading', { level: 3 }) || false}
      />
      <EditorMenuItem 
        label='h4'
        clickHandler={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
        active={editor?.isActive('heading', { level: 4 }) || false}
      />
      <EditorMenuItem 
        label='h5'
        clickHandler={() => editor?.chain().focus().toggleHeading({ level: 5 }).run()}
        active={editor?.isActive('heading', { level: 5 }) || false}
      />
      <EditorMenuItem 
        label='h6'
        clickHandler={() => editor?.chain().focus().toggleHeading({ level: 6 }).run()}
        active={editor?.isActive('heading', { level: 6 }) || false}
      />
      <EditorMenuItem 
        label='bullet list'
        clickHandler={() => editor?.chain().focus().toggleBulletList().run()}
        active={editor?.isActive('bulletList') || false}
      />
      <EditorMenuItem 
        label='ordered list'
        clickHandler={() => editor?.chain().focus().toggleOrderedList().run()}
        active={editor?.isActive('orderedList') || false}
      />
      <EditorMenuItem 
        label='code block'
        clickHandler={() => editor?.chain().focus().toggleCodeBlock().run()}
        active={editor?.isActive('codeBlock') || false}
      />
      <EditorMenuItem 
        label='blockquote'
        clickHandler={() => editor?.chain().focus().toggleBlockquote().run()}
        active={editor?.isActive('blockquote') || false}
      />
      <EditorMenuItem 
        label='horizontal rule'
        clickHandler={() => editor?.chain().focus().setHorizontalRule().run()}
      />
      <EditorMenuItem 
        label='hard break'
        clickHandler={() => editor?.chain().focus().setHardBreak().run()}
      />
      <EditorMenuItem 
        label='undo'
        clickHandler={() => editor?.chain().focus().undo().run()}
      />
      <EditorMenuItem 
        label='redo'
        clickHandler={() => editor?.chain().focus().redo().run()}
      />
    </Container>
  )
}

export default EditorMenuBar