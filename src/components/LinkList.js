import React from 'react'
import Link from './Link'
import { useQuery, gql } from '@apollo/client'

//define a query
const FEED_QUERY = gql` 
    {
        feed {
            id
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`;

const LinkList = () => {
    //pass the defined query in the useQuery hook and interate over that data after it has loaded
    const { loading, error, data } = useQuery(FEED_QUERY)


    return (
        loading ? <div>Loading ...</div> : 
        <div>
            {data.feed.links.map(link => (
                <Link key={link.id} link={link} />
            ))}
        </div>
    )
}

export default LinkList