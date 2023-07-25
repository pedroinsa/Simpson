import {
    GET_ALL_CHARACTERS
} from "../actions"
import rodd from "../../../src/rodd.png"
import bart from "../../../src/bart3.png"
import martin from "../../../src/Martin.png"
import sherri from "../../../src/sherri.png"
import manjula from "../../manjula.png"
import hoover from "../../hoover.png"
interface characterProps {
    name: string
    src: string
}
const initialState = {
    characters: [{ name: "Krusty", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Krusty_the_Clown_nz1z1o.png" }
        , { name: "Cletus", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Cletus_Spuckler_rvpr9g.png" }
        , { name: "Kirk Van Houten", src: "https://static.simpsonswiki.com/images/2/20/Kirk_Van_Houten.png" }
        , { name: "Manjula", src: manjula }
        , { name: "Ayudante de Santa", src: "https://static.simpsonswiki.com/images/thumb/2/2c/Santa%27s_Little_Helper.png/200px-Santa%27s_Little_Helper.png" }
        , { name: "Carl", src: "https://static.simpsonswiki.com/images/thumb/a/a9/Carl_Carlson.png/200px-Carl_Carlson.png" }
        , { name: "El hombre Topo", src: "https://static.simpsonswiki.com/images/e/e7/Hans_Moleman.png" }
        , { name: "Nick Riviera", src: "https://static.simpsonswiki.com/images/thumb/0/05/Nick_Riviera.png/200px-Nick_Riviera.png" }
        , { name: "Otto", src: "https://static.simpsonswiki.com/images/thumb/0/09/Otto_Mann.png/200px-Otto_Mann.png" }
        , { name: "Springfield", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1686013263/simpsons/Jebediah_Springfield_e6iwog.png" }
        , { name: "Frank Grimes", src: "https://static.simpsonswiki.com/images/c/c8/Frank_Grimes.png" }
        , { name: "Roy Snyder", src: "https://static.simpsonswiki.com/images/thumb/5/52/Roy_Snyder.png/200px-Roy_Snyder.png" }
        , { name: "Lou", src: "https://static.simpsonswiki.com/images/thumb/1/17/Lou.png/200px-Lou.png" }
        , { name: "Maggie", src: "https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png" }
        , { name: "Abraham Simpson", src: "https://static.simpsonswiki.com/images/thumb/a/a9/Abraham_Simpson.png/250px-Abraham_Simpson.png" }
        , { name: "Martin", src: martin }
        , { name: "Jimbo", src: "https://static.simpsonswiki.com/images/thumb/4/42/Jimbo_Jones.png/250px-Jimbo_Jones.png" }
        , { name: "McBain", src: "https://static.simpsonswiki.com/images/c/c5/Rainier_Wolfcastle.png" }
        , { name: "Eddie", src: "https://static.simpsonswiki.com/images/thumb/c/c3/Eddie.png/250px-Eddie.png" }
        , { name: "Becky", src: "https://static.simpsonswiki.com/images/7/71/Becky_Mad_Marge.png" }
        , { name: "Cosme Fulanito", src: "https://static.simpsonswiki.com/images/thumb/1/16/Guy_Incognito.png/200px-Guy_Incognito.png" }
        , { name: "Don Brodka", src: "https://static.simpsonswiki.com/images/thumb/3/3b/Don_Brodka.png/200px-Don_Brodka.png" }
        , { name: "Hombre Pie", src: "https://static.simpsonswiki.com/images/thumb/2/2b/Pie_Man.png/200px-Pie_Man.png" }
        , { name: "Louie", src: "https://static.simpsonswiki.com/images/f/f3/Louie.png" }
        , { name: "Profesor Frink", src: "https://static.simpsonswiki.com/images/thumb/3/3b/Jonathan_Frink.png/200px-Jonathan_Frink.png" }
        , { name: "Edna", src: "https://static.simpsonswiki.com/images/thumb/7/76/Edna_Krabappel.png/200px-Edna_Krabappel.png" }
        , { name: "Capitan", src: "https://static.simpsonswiki.com/images/thumb/5/5e/Horatio_McCallister.png/230px-Horatio_McCallister.png" }
        , { name: "Lionel Hutz", src: "https://static.simpsonswiki.com/images/thumb/e/ed/Lionel_Hutz.png/200px-Lionel_Hutz.png" }
        , { name: "Doctor Hibbert", src: "https://static.wikia.nocookie.net/simpsons/images/9/9c/Julius_Hibbert.png" }
        , { name: "Chester Lampwick", src: "https://static.simpsonswiki.com/images/thumb/7/72/Chester-J-Lampwick.png/200px-Chester-J-Lampwick.png" }
        , { name: "Encias Sangrantes", src: "https://static.simpsonswiki.com/images/thumb/4/44/Bleeding_Gums_Murphy.png/200px-Bleeding_Gums_Murphy.png" }
        , { name: "Señor Burns", src: "https://static.simpsonswiki.com/images/thumb/9/9d/Charles_Montgomery_Burns.png/250px-Charles_Montgomery_Burns.png" }
        , { name: "Kent Brockman", src: "https://static.simpsonswiki.com/images/thumb/1/16/Kent_Brockman.png/250px-Kent_Brockman.png" }
        , { name: "Tony", src: "https://static.simpsonswiki.com/images/thumb/e/ec/Fat_Tony.png/200px-Fat_Tony.png" }
        , { name: "Maude", src: "https://static.simpsonswiki.com/images/thumb/9/95/Maude_Flanders.png/200px-Maude_Flanders.png" }
        , { name: "Hank Scorpio", src: "https://static.simpsonswiki.com/images/3/39/Hank_Scorpio.png" }
        , { name: "Milhouse", src: "https://static.simpsonswiki.com/images/thumb/1/11/Milhouse_Van_Houten.png/230px-Milhouse_Van_Houten.png" }
        , { name: "Artie Ziff", src: "https://static.simpsonswiki.com/images/thumb/0/0c/Artie_Ziff.png/200px-Artie_Ziff.png" }
        , { name: "Roger Meyers", src: "https://static.simpsonswiki.com/images/b/b8/Roger_Meyers%2C_Jr..png" }
        , { name: "Luann Van Houten", src: "https://static.simpsonswiki.com/images/8/8f/Luann_Van_Houten.png" }
        , { name: "Disco Stu", src: "https://static.simpsonswiki.com/images/thumb/f/f7/Disco_Stu.png/200px-Disco_Stu.png" }
        , { name: "El de las historietas", src: "https://static.simpsonswiki.com/images/thumb/9/9d/Comic_Book_Guy.png/200px-Comic_Book_Guy.png" }
        , { name: "Tomy", src: "https://static.simpsonswiki.com/images/thumb/9/9a/Scratchy.png/250px-Scratchy.png" }
        , { name: "Lisa", src: "https://static.simpsonswiki.com/images/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png" }
        , { name: "Mojo", src: "https://static.simpsonswiki.com/images/4/48/Mojo.png" }
        , { name: "Marge", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/250px-Marge_Simpson_ivadwr.png" }
        , { name: "Ned Flanders", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/Ned_Flanders_zwqcjg.png" }
        , { name: "Gaspar", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559694/simpsons/200px-Jasper_Beardsley_a0zhga.png" }
        , { name: "Snake", src: "https://static.simpsonswiki.com/images/thumb/b/be/Snake_Jailbird.png/200px-Snake_Jailbird.png" }
        , { name: "Herbert", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/250px-Herbert_Powell_xsndsz.png" }
        , { name: "Barney", src: "https://static.simpsonswiki.com/images/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png" }
        , { name: "Rafa", src: "https://static.simpsonswiki.com/images/thumb/1/14/Ralph_Wiggum.png/230px-Ralph_Wiggum.png" }
        , { name: "Maestra Hoover", src: hoover }
        , { name: "Apu", src: "https://static.simpsonswiki.com/images/thumb/7/7d/Apu_Nahasapeemapetilon.png/200px-Apu_Nahasapeemapetilon.png" }
        , { name: "Luigi", src: "https://static.simpsonswiki.com/images/2/22/Luigi_Risotto.png" }
        , { name: "Johnny Boca Cerrada", src: "https://static.simpsonswiki.com/images/d/d7/Johnny_Tightlips.png" }
        , { name: "Cecil Patiño", src: "https://static.simpsonswiki.com/images/8/88/Cecil_Terwilliger.png" }
        , { name: "Don Vittorio", src: "https://static.simpsonswiki.com/images/5/58/Don_Vittorio_DiMaggio.png" }
        , { name: "Nelson", src: "https://static.simpsonswiki.com/images/thumb/c/c5/Nelson_Muntz.png/250px-Nelson_Muntz.png" }
        , { name: "Smithers", src: "https://res.cloudinary.com/dglqojivj/image/upload/v1682559693/simpsons/200px-Waylon_Smithers__Jr._mmvhsc.png" }
        , { name: "Sherri", src: sherri },
        , { name: "Skinner", src: "https://static.simpsonswiki.com/images/3/3a/Seymour_Skinner.png" }
        , { name: "Superintendente Chalmers", src: "https://static.simpsonswiki.com/images/thumb/f/f9/Gary_Chalmers.png/200px-Gary_Chalmers.png" }
        , { name: "Reverendo Alegria", src: "https://static.simpsonswiki.com/images/thumb/c/c1/Timothy_Lovejoy%2C_Jr..png/250px-Timothy_Lovejoy%2C_Jr..png" }
        , { name: "Helen Alegria", src: "https://static.simpsonswiki.com/images/thumb/9/91/Helen_Lovejoy.png/150px-Helen_Lovejoy.png" }
        , { name: "Jessica Alegria", src: "https://static.simpsonswiki.com/images/9/93/Jessica_Lovejoy.png" }
        , { name: "Willy", src: "https://static.simpsonswiki.com/images/thumb/9/9d/Groundskeeper_Willie.png/250px-Groundskeeper_Willie.png" }
        , { name: "Lenny", src: "https://static.simpsonswiki.com/images/thumb/a/ae/Lenny_Leonard.png/200px-Lenny_Leonard.png" }
        , { name: "Jefe Gorgory", src: "https://static.simpsonswiki.com/images/thumb/e/ec/Clancy_Wiggum.png/245px-Clancy_Wiggum.png" }
        , { name: "Agnes", src: "https://static.simpsonswiki.com/images/7/7d/Agnes_Skinner.png" }
        , { name: "Nessie", src: "https://static.simpsonswiki.com/images/5/56/Loch_Ness_Monster.png" }
        , { name: "Homero", src: "https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png" }
        , { name: "Bob Patiño", src: "https://static.simpsonswiki.com/images/thumb/0/01/Sideshow_Bob.png/200px-Sideshow_Bob.png" }
        , { name: "Rodd Flanders", src: rodd }
        , { name: "Mel Patiño", src: "https://static.simpsonswiki.com/images/thumb/0/02/Sideshow_Mel.png/200px-Sideshow_Mel.png" }
        , { name: "Cocinera Doris", src: "https://static.simpsonswiki.com/images/thumb/a/ab/Lunchlady_Dora.png/200px-Lunchlady_Dora.png" }
        , { name: "Alcalde Diamante", src: "https://static.simpsonswiki.com/images/b/b7/Joe_Quimby.png" }
        , { name: "Todd Flanders", src: "https://static.simpsonswiki.com/images/thumb/1/18/Todd_Flanders.png/180px-Todd_Flanders.png" }
        , { name: "Elio Pez", src: "https://static.simpsonswiki.com/images/2/24/Rex_Banner.png" }
        , { name: "Stephen Hawking", src: "https://static.simpsonswiki.com/images/thumb/f/f6/Stephen_Hawking_character.png/250px-Stephen_Hawking_character.png" }
        , { name: "Daly", src: "https://static.simpsonswiki.com/images/thumb/2/24/Itchy.png/225px-Itchy.png" }
        , { name: "Bola de nieve II", src: "https://static.simpsonswiki.com/images/a/a6/Snowball_II.png" }
        , { name: "Patty", src: "https://static.simpsonswiki.com/images/f/f8/Patty_Bouvier.png" }
        , { name: "Selma", src: "https://static.simpsonswiki.com/images/thumb/b/ba/Selma_Bouvier.png/250px-Selma_Bouvier.png" }
        , { name: "Moe", src: " https://static.simpsonswiki.com/images/thumb/8/80/Moe_Szyslak.png/230px-Moe_Szyslak.png" }
        , { name: "Allison", src: "https://static.simpsonswiki.com/images/thumb/c/c3/Allison_Taylor.png/200px-Allison_Taylor.png" }
        , { name: "Uter", src: "https://static.simpsonswiki.com/images/thumb/f/f3/Uter_Zorker.png/200px-Uter_Zorker.png" }
        , { name: "Marvin Monroe", src: "https://static.simpsonswiki.com/images/5/54/Marvin_Monroe.png" }
        , { name: "Kang", src: "https://static.simpsonswiki.com/images/thumb/7/78/Kang.png/250px-Kang.png" }
        , { name: "Hombre abejorro", src: "https://static.simpsonswiki.com/images/thumb/1/17/Bumblebee_Man.png/250px-Bumblebee_Man.png" }
        , { name: "Herman", src: "https://static.simpsonswiki.com/images/f/f3/Herman_Hermann.png" }
        , { name: "Bart", src: bart }
    ]

}
type action = { type: string }

export const rootReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return state


        default: return state
    }

}