const getSize = (size: string) => {
    switch(size) {
        case 'S':
            return '14px';
        case 'M':
            return '24px';
        case 'L':
            return '48px';
        default:
            return '14px';
    }
};

export const GithubIcon = ({size = 'S', color = 'rgb(179, 179, 179)'}) => {
    let dimension = getSize(size);
    return <div style={{width: dimension, height: dimension}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M 6.979 0 C 3.12 0 0 3.143 0 7.031 C 0 10.139 1.999 12.77 4.772 13.701 C 5.119 13.771 5.246 13.55 5.246 13.364 C 5.246 13.201 5.234 12.642 5.234 12.06 C 3.293 12.479 2.889 11.222 2.889 11.222 C 2.577 10.407 2.114 10.197 2.114 10.197 C 1.479 9.767 2.161 9.767 2.161 9.767 C 2.866 9.813 3.235 10.488 3.235 10.488 C 3.859 11.559 4.865 11.257 5.269 11.07 C 5.327 10.616 5.512 10.302 5.708 10.127 C 4.16 9.964 2.531 9.359 2.531 6.658 C 2.531 5.89 2.808 5.262 3.247 4.773 C 3.178 4.598 2.935 3.876 3.316 2.91 C 3.316 2.91 3.906 2.724 5.234 3.632 C 5.803 3.478 6.39 3.4 6.979 3.399 C 7.568 3.399 8.169 3.481 8.724 3.632 C 10.053 2.724 10.642 2.91 10.642 2.91 C 11.023 3.876 10.781 4.598 10.711 4.773 C 11.162 5.262 11.428 5.89 11.428 6.658 C 11.428 9.359 9.799 9.953 8.239 10.127 C 8.493 10.349 8.712 10.768 8.712 11.431 C 8.712 12.374 8.701 13.131 8.701 13.363 C 8.701 13.55 8.828 13.771 9.175 13.701 C 11.948 12.77 13.947 10.139 13.947 7.031 C 13.958 3.143 10.827 0 6.979 0 Z" fill={color}></path></svg>
    </div>
}

export const LinkedInIcon = ({size = 'S', color = 'rgb(179, 179, 179)'}) => {
    let dimension = getSize(size);

    return <div style={{width: dimension, height: dimension}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color={color} ><g color={color}><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" fill={color}></path></g></svg>
    </div>;
}

export const DiscordIcon = ({size = 'S', color = 'rgb(179, 179, 179)'}) => {
    let dimension = getSize(size);
    return <div style={{width: dimension, height: dimension}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color={color} ><g color={color}><path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z" fill={color}></path></g></svg>
    </div>
}

export const XIcon = ({size = 'S', color = 'rgb(179, 179, 179)'}) => {
    let dimension = getSize(size);
    return <div style={{width: dimension, height: dimension}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" id="svg2382164700">
            <path d="M 15.418 19.037 L 3.44 3.637 C 3.311 3.471 3.288 3.247 3.381 3.058 C 3.473 2.87 3.665 2.75 3.875 2.75 L 6.148 2.75 C 6.318 2.75 6.478 2.829 6.582 2.963 L 18.56 18.363 C 18.689 18.529 18.712 18.753 18.619 18.942 C 18.527 19.13 18.335 19.25 18.125 19.25 L 15.852 19.25 C 15.682 19.25 15.522 19.171 15.418 19.037 Z" fill="transparent" strokeWidth="1.38" strokeMiterlimit="10" stroke={color}></path>
            <path d="M 18.333 2.75 L 3.667 19.25" fill="transparent" strokeWidth="1.38" strokeLinecap="round" strokeMiterlimit="10" stroke={color}></path>
        </svg>
    </div>
}

export const GithubIcon2 =  ({size = 'S', color = 'rgb(179, 179, 179)'}) => {
    let dimension = getSize(size);
    return <div style={{width: dimension, height: dimension}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color={color}><g color={color}><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" fill={color}></path></g></svg>
    </div>
} 