// create semi-basic footer

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <h5>Copyright {year}. Amy Marais</h5>
        </footer>
    )
}
