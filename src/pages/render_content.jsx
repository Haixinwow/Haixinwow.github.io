
const RenderContent = ({ items }) => {
    return items.map((item, index) => {
        if (item.type === "text") {
            return <p key={index}>{item.value}<br/></p>;
        }

        if (item.type === "subtitle") {
            return (
                <h2 key={index} className="subtitles"><br/> {item.value}</h2>
            )
        }

        if (item.type === "image") {
            return (
                <img
                    key={index}
                    src={item.src}
                    alt=""
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            );
        }

        if (item.type === "embed") {
            return (
                <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.code }}
                    style={{ width: '100%', textAlign: 'center' }}
                />
            );
        }

        if (item.type === "multi") {
            return (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: item.direction,
                        gap: '1rem',
                        justifyContent: 'center',
                    }}
                >
                    {item.items.map((child, i) => {
                        if (child.type === 'image') {
                            return (
                                <div
                                    key={i}
                                    style={{
                                        flex: `1 1 ${100 / item.items.length}%`,
                                        minWidth: '150px',
                                    }}
                                >
                                    <RenderContent items={[child]} />
                                </div>
                            );
                        }

                        return <RenderContent key={i} items={[child]} />;
                    })}
                </div>
            );
        }

        return null;
    });
};

export default RenderContent