const Foo = ({ xs }) => {
    return (
        <div>
            <p>don't return me in a sourcegraph search!</p>
            <p>I'm the wrong {xs}</p>
        </div>
    )
}

export default Foo;