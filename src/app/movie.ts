export class Movie {
  constructor(
    private id: number,
    private original_title: string,
    private original_langue: string,
    private overview: string,
    private popularity: number,
    private status: string,
    private release_date: string
  ) {
  }
}
