export default function NewPage1({ data }) {
    const { user, pages } = data[0];
    return (
      <>
        <div>Edited New Page 1</div>
        <span>{user.name}</span>
        <ul>
          {pages.map((page, i) =>
            <li key={i}>
              {page.description}
            </li>
          )}
        </ul>
      </>
    )
  }
  