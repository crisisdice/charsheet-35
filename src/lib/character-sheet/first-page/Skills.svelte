<script lang="ts">
  import Skill from './Skill.svelte';

  import { skills } from '../skills';
</script>

<table>
  <thead>
    <tr style="height: 50%;">
      <th rowspan="2">
        <div class="class-skill" style="">Class Skill?</div>
      </th>
      <th class="skills" colspan="3">Skills</th>
      <th class="cross-class" colspan="2">
        <div>Max Ranks</div>
        <div style="white-space: nowrap;">(Class / Cross-Class)</div>
      </th>
      <th colspan="1" style="width: 15%">
        <input type="text" style="float: right; width: 60%;" />
      </th>
    </tr>
    <tr style="height: 50%;">
      <td style="font-weight: bold; width: 35%;">Skill Name</td>
      <td style="width: 12%; font-weight: bold; text-align: center;">Key Ability</td>
      <td style="width: 12%; text-align: center;">Skill Modifier</td>
      <td style="width: 12%; text-align: center;">Ability Modifier</td>
      <td style="width: 12%; text-align: center;">Ranks</td>
      <td style="width: 12%; text-align: center;">Misc Modifier</td>
    </tr>
  </thead>
  <tbody>
    {#each skills as skill}
      <Skill {skill} />
    {/each}
  </tbody>
</table>

<style lang="scss">
  table {
    padding: 40px;
    border-collapse: collapse;
    font-size: $font-small;
  }

  th {
    border: 1px solid black;
    background-color: black;
    color: white;
  }

  td {
    height: 10px;
    border: 1px solid black;
    font-size: $font-small;
  }

  .class-skill {
    transform: rotate(-90deg);
    font-size: 6px;
    margin-left: -18px;
    margin-right: -18px;
    white-space: nowrap;
    padding: 0px;
  }

  .skills {
    font-size: $font-medium;
    text-align: right;
    letter-spacing: 1px;
  }

  .cross-class {
    font-size: $font-mini;
    text-align: right;
  }
</style>
