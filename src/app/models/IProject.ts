export default interface Project {
  _id:string
  minimum_stake: string;
  title: string;
  description: string;
  goal: {};
  stage: string;
  category: string;
  funding_type: string;
  owners: {};
  location: [];
  imageUrl: string;
  address: string;
  applications:[]
}
