import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';

// Declare your component
export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            doc: null,
            notFound: false,
        }
        if (props.prismicCtx) {
            this.fetchPage(props);
        }
    }

    componentDidUpdate(prevProps) {
        this.props.prismicCtx.toolbar();
        // We fetch the page only after it's ready to query the api
        if (!prevProps.prismicCtx) {
            this.fetchPage(this.props);
        }
    }

    fetchPage(props) {
        if (props.prismicCtx) {
            // We are using the function to get a document by its uid
            return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, doc) => {
                if (doc) {
                    // We put the retrieved content in the state as a doc variable
                    this.setState({ doc });
                } else {
                    // We changed the state to display error not found if no matched doc
                    this.setState({ notFound: !doc });
                }
            });
        }
        return null;
    }

    render() {
        // We will fill in this section in Step 5...
        return null;
    }
}