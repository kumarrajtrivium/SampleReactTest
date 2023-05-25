function MainContent() {
    const name = 'Raj';
    return (
        <p>Hello {name ? name : ''}</p>
    );
}

export default MainContent;