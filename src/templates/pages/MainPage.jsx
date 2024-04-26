import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Fragment } from 'react'

const heroes = [
  {
    id: 1,
    title: "Магнито",
    img_src: "public/marvel/magneto.jpg",
    img_alt: "Magneto",
    text: "Используя свои мощные магнетические способности, он стал радикальным борцом за свободу во имя своего вида. Его единственным приоритетом является сохранение расы мутантов — даже в ущерб тому, что некоторые могут счесть высшим благом."
  },
  {
    id: 2,
    title: "Рассамаха",
    img_src: "public/marvel/rassa.jpg",
    img_alt: "rassa",
    text: "Из северной глуши Канады родом один из самых грубых, вспыльчивых, абсолютно циничных и задумчивых членов Людей Икс, когда-либо удостаивавший команду своим присутствием."
  },
  {
    id: 3,
    title: "Циклоп",
    img_src: "public/marvel/ciklop.jpg",
    img_alt: "Ciklop",
    text: "От стоического лидера Людей Икс до закоренелого радикала, Циклоп всегда верен мутантам и полон решимости воплотить мечту Ксавьера о мире между мутантами и людьми в реальность."
  },
  {
    id: 4,
    title: "ДЖИН ГРЕЙ",
    img_src: "public/marvel/jeangrey.jpg",
    img_alt: "Jeangrey",
    text: "От девушки из Marvel до Темного Феникса, телепатические и телекинетические способности Джин Грей делают ее одной из самых могущественных Людей Икс в истории."
  }
]

const MainPage = () => {
  return (
    <Box>
      <Stack spacing={2}>
        {
          heroes.map((hero) => {
            return (
              <Fragment key={hero.id}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>{hero.title}</Typography>
                  </Grid>

                  <Grid item md={4} sm={12}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%"
                      }}
                      alt={hero.img_alt}
                      src={hero.img_src}
                    />
                  </Grid>
                  <Grid item md={8} sm={12}>
                    <Typography>{hero.text}</Typography>
                  </Grid>
                </Grid>

                <Divider variant="middle"/>
              </Fragment>
            )
          })
        }
      </Stack>
    </Box>
  )
}

export default MainPage