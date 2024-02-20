'use client'

import React from 'react'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
// import './editor.css';
import '../../globals.css';
function Editor() {
    const options = {
        key: 'iTB2xC5A4B4D1E1C1E1pZGCTRSAPJWTLPLZHTQQb1JGZxE2F2G2G1B10B2D2E6E1G1==',
        editorClass: 'editor',
        heightMin: 500,
        toolbarButtons: {

            'moreText': {

                'buttons': ['undo', 'redo', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']

            },

            'moreParagraph': {

                'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']

            },

            'moreRich': {

                'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
                align: 'right',

            },

        }


    }
    return (
        <div className='mx-auto w-full'>
            <FroalaEditorComponent tag='textarea'
                onModelChange={(e: any) => console.log(e)}
                config={options}
            />

        </div>
    )
}

export default Editor
