import { useEffect } from 'react' ;

//custom hook that is reusable
export default function useDocumentTitle(title) {
    useEffect(() => { //componentDidMount,update
        document.title = title;
    })
}
 
