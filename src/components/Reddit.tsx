import React, {BaseSyntheticEvent, FC, useEffect, useState} from 'react';
import './Tweet.css';
import './Avatar.css';
import './Message.css';
import './Author.css';
import './Time.css';
import './Buttons.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBahai, faEllipsisH, faHeart, faReply, faRetweet} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {Time} from "./Tweet";
import axios from "axios";
import {useQuery} from "react-query";

export interface RedditProps {
    subreddit: string;
}

export interface PostModel {
    id: string;
    selftext: string;
    subreddit: string;
    title: string;
}

const getPosts = async (subreddit: string) => {
    const {data} = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
    return data.data.children.map((o: any) => o.data);
};

const usePosts = (subredit: string) => {
    return useQuery(['posts', subredit], () => getPosts(subredit));
}

const useDebounce = (value: string, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler: NodeJS.Timeout = setTimeout(() => {
            console.log('setDebouncedValue', value);
            setDebouncedValue(value);
        }, delay);

        // Cancel the timeout if value changes (also on delay change or unmount)
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export const RedditContainer: FC = () => {
    const [search, setSearch] = useState('reactjs');

    const handleChange = (e: BaseSyntheticEvent) => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    }

    return (
        <div>
            Search: <input value={search} onChange={handleChange} />
            <Reddit subreddit={search} />
        </div>
    );
};

export const Reddit: FC<RedditProps> = ({subreddit}) => {
    const debouncedSearchQuery = useDebounce(subreddit, 600);
    const {status, data, error, isFetching} = usePosts(debouncedSearchQuery);

    if (status === 'loading') {
        return (<div>Loading...</div>);
    } else {
        return (
            <div>
                <h1>{`/r/${subreddit}`}</h1>
                <p>{status}</p>
                <p>{isFetching ? <div>Refreshing...</div> : null}</p>
                <ul>
                    {data.map((post: PostModel) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
};

