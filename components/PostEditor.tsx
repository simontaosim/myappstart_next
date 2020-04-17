import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function PostEditor(props:any){
    // const [content, setContent] = useState;
    const { onChange, body } = props;
    const handleEditorChange = (content:any, _editor:any) => {
        onChange(content);
    }
    return (
        <Editor 
        apiKey='dftqdtu0frb42m30qbqitqrehs283wq1cbd9v4g2qo2esdsq'
        value={body}
         init={{
           height: 200,
           max_width: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           placeholder: '编辑您的帖',
           language: 'zh_TW',
           toolbar:
             'formatselect image fullscreen | bold italic backcolor link | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat',
             quickbars_selection_toolbar: false
         }}
         onEditorChange={handleEditorChange}
       />
    )
}