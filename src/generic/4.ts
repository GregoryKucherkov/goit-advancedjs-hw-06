/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page<T extends ComponentProps> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
