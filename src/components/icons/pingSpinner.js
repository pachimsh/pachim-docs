import _ from 'lodash';

export default function PingSpinner({ pingColor = null  , staticColor = null}) {
    return (
        <div className="flex h-2 w-2 relative ml-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingColor ? pingColor : 'bg-gray-400'} opacity-75`}/>
            <span className={`inline-flex rounded-full h-2 w-2 ${staticColor ? staticColor : 'bg-gray-500'}`} />
        </div>
    )
}
